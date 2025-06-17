---
title: Learning How to Use OSMNX
type: docs
---

# Learning How to Use OSMNX: Mapping the Parisian Metro

**September 28, 2023**

I've been recently toying around with `osmnx` quite a bit, mostly because I really wanted to do some urban design and city modeling. I discovered `osmnx` through this and later, through [Geoff Boeing's Blog](https://geoffboeing.com/), became extremely excited at the idea.  

So I figured I may as well give it a go. I haven't done or worked on many personal projects in a while so this did excite me quite a lot.  

Firstly, I had to choose a city and an idea that I'd model out. Something pretty basic to start with in my mind would be modeling a city itself, and then perhaps do some kind of shortest path earch on the metro overlayed upon the city.  

Because I have an immense bias to everything French, I immediately chose to do Paris.  

It's pretty easy to first pull up a city and model it through a network with `osmnx`:  

```python
G = ox.graph_from_place("Paris, France")
ox.plot_graph(G)
```

<figure>
  <p style="text-align:center;"><img src=images/firstparismodel.png alt="First model of Paris" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Our first model of Paris</figcaption>
</figure>

The data we recieve here is all modeled with `networkx`, so it is, in effect, a modeling of nodes and edges. In this case, I believe we are modeling the streets/roads of Paris and the connections between them. I'm not a huge fan of how this looks, so let's go ahead and change it up a bit.  

Let's start by taking a look at our data itself, and how it's structured:  

```python
gdf_nodes, gdf_edges = ox.graph_to_gdfs(G)
gdf_nodes.head()
```

<figure>
  <p style="text-align:center;"><img src=images/datatable.png alt="Description of our data" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Description of our data</figcaption>
</figure>

We can take this data and just restructure it and redesign its output and thus its appearance:  

```python
G2 = ox.graph_from_gdfs(gdf_nodes, gdf_edges, graph_attrs=G.graph)
ox.plot_graph(G2, node_size=0, bgcolor="#ffffff", node_color='b')
```

<figure>
  <p style="text-align:center;"><img src=images/parismodel_2.png alt="Redesigned model of Paris" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Redesigned model of Paris</figcaption>
</figure>

Alright, now that we have a somewhat decent model of Paris up, we can now consider their metro system. We can do this by performing a filter on the data that we get from `osmnx` where we look in particular for railways and subways (`["railway"~"subway"]`).  

```python
G3 = ox.graph_from_place("Paris, France", retain_all=False, truncate_by_edge=True, simplify=True,                        custom_filter='["railway"~"subway"]')
ox.plot_graph(G3)
```

<figure>
  <p style="text-align:center;"><img src=images/parismetro_1.png alt="Model of Paris's Metro" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Model of Paris's Metro</figcaption>
</figure>

Alright! So that looks about right. The design isn't fantastic, but we can fix that, or we can make it look even more ridiculous! Let's go ahead and pull out all of the information from this metro data and overlay it onto the city data we got from earlier. We can redesign it as we do that as well.  

```python
composite_G = nx.compose(G2, G3)
ec = ['y' if 'Métro' in str(c) else '#8a3535' for _,_,c in composite_G.edges.data('name')]
fig, ax = ox.plot_graph(composite_G, bgcolor='k', edge_color=ec, node_size=0, 
                        edge_linewidth=0.5, close=False)
```

<figure>
  <p style="text-align:center;"><img src=images/parismodel_3.png alt="Overlayed Model of Paris" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Overlayed Model of Paris's Metro onto Paris</figcaption>
</figure>

Now, lets take a look at our data and see what we can do with it. I'd ideally like to do a shortest path travelersal on some of the stations of the Paris metro, because this is all built on `networkx`, which already provides that functionality, it shouldn't be too difficult.  

```python
G3.edges.data()
```

```python
OutMultiEdgeDataView([(29588070, 260767428, {'osmid': 142160901, 'tunnel': 'yes', 'name': 'Métro 9', 'oneway': False, 'reversed': False, 'length': 1977.8989999999997, 'geometry': <LINESTRING (2.244 48.834, 2.256 48.838, 2.257 48.838, 2.257 48.838, 2.258 4...>}), (134299001, 10038858874, {'osmid': 24331466, 'tunnel': 'yes', 'name': 'Métro 12', 'oneway': False, 'reversed': False, 'length': 1631.086, 'geometry': <LINESTRING (2.273 48.824, 2.274 48.825, 2.275 48.825, 2.276 48.825, 2.277 4...>}),
```

Hmmm... There doesn't really appear to be much information there about the name of the stations themseleves. Let's see if we can dig deeper:  

```python
dat = [c for _,_,c in G3.edges.data()]
for i in range(0, len(dat)):
    print(dat[i]['name'])
```

```
Métro 9
Métro 12
Métro 6 Corvisart-Place D'Italie
Métro 6
Métro 2
Métro 2
...
```

Ah. So only a select few stations are actually labeled by their proper names, the rest appear to just be tagged to their line? That is quite unfortunate. In that case, we can at least go off of the `osmid`, which looks like a unique identifier for these different transportation nodes, but I can't say for sure. Let's take, for instance `29588070` as our beginning station on the metro and `325664764` as our destination station. I'll use the Dijkstra's method for this.  

```python
path = nx.shortest_path(G3, source=29588070, target=325664764, method='dijkstra')
nc = ['#025228' if a in path else '#9aa99a' for a,_,_ in composite_G.edges.data()]
el = [1 if a in path else 0.5 for a,_,_ in composite_G.edges.data()]
fig, ax = ox.plot_graph(composite_G, bgcolor='#ffffff', edge_color=nc, node_size=0, 
                        edge_linewidth=el, close=False)
```

<figure>
  <p style="text-align:center;"><img src=images/parismodel_4.png alt="Shortest Path of Two Stations on Metro" style="width: 90%; height: auto;"></p>
  <figcaption style="font-size: 11px; text-align:center;">Shortest path between two random stations on the Paris Metro</figcaption>
</figure>

Interesting, looks like we managed to get some stop at the edge of one of the lines leading to what looks like a stop somewhere in the North (or in the oposite direction). Pretty neat! Unfortunately, it would be a bit difficult to build a system out of this that would let me choose two different stations by name and then see the shortest path that way, but perhaps another city would have those options. For now, this was at least a good enough introduction for me into `osmnx`. I really like all the features available with this, and I'll be trying to do a lot more with it in the future.