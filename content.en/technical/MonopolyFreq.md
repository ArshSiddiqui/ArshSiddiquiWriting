---
title: Monopoly Frequency
type: docs
weight: 10
---

# What squares are landed on the most in Monopoly?


I am pretty bad at Monopoly myself, and I had been lately learning more about how to improve my game. 
One interesting consideration to have when it comes to playing Monopoly is to consider which squares 
are landed upon the most. I typically spend my games trying to purchase squares near the end of the 
board, because if anybody lands on them I get a higher payout, but is that mentality necessarily true?  

As it turns out, no.  

We might imagine that as we roll the die, there would be an even spread of chance for landing on any 
particular square on the board. This would be true if we never had external forces moving us around 
the board and if we were only following the whim of the die.  

Consider that if we roll doubles thrice, we go to jail, and there are special cards and circumstances 
that would send us back to the beginning of the board. This leads us to having a skew to the home 
position and to the jail location. Considering these pieces of information, upon exiting them with 
another role of the die, we may find a lot of our locations clustered around the following spots on 
the board.  

Knowing this information, we can then create a Python script that contains knowledge of all of the 
positions on the board and of all of the chance and community chest cards to effectively play the 
game some number of times counting up each spot we land on to determine which spots are landed upon 
the most frequently.  

The following are the results that I have attained from the code:  

| Square | Probability of Landing |
| :------| -----------:|
| Jail / Just Visiting  | 6.7% |
| Go | 3.11% |
| Reading Railroad    | 2.88% |
|Illinois Avenue|2.82%|
|St. Charles Place|2.73%|
|Boardwalk|2.7%|
|Short Line|2.65%|
|New York Avenue|2.6%|
|Water Works|2.54%|
|Tennessee Avenue|2.47%|
|Free Parking|2.45%|
|Community Chest|2.44%|
|Community Chest - 2|2.43%|
|St. James Place|2.39%|
|Electric Company|2.39%|
|Kentucky Avenue|2.39%|
|Chance|2.38%|
|Chance - 2|2.35%|
|Income Tax|2.35%|
|Vermont Avenue|2.35%|
|Pennsylvania Railroad|2.34%|
|Indiana Avenue|2.33%|
|Connecticut Avenue|2.3%|
|Chance - 3|2.29%|
|Oriental Avenue|2.29%|
|B. & O. Railroad|2.29%|
|Atlantic Avenue|2.28%|
|Pennsylvania Avenue|2.27%|
|Park Place|2.26%|
|North Carolina Avenue|2.26%|
|Pacific Avenue|2.26%|
|Virginia Avenue|2.24%|
|Luxury Tax|2.23%|
|Ventnor Avenue|2.23%|
|Go To Jail|2.22%|
|States Avenue|2.2%|
|Marvin Gardens|2.18%|
|Community Chest - 3|2.15%|
|Mediterranean Avenue|2.14%|
|Baltic Avenue|2.12%|