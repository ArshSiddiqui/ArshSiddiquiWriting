---
title: Headline Sentiment
type: docs
weight: 10
---

# Headline Sentiment


Due to the prevalence of the internet in our day to day lives, we often tend to read and 
view news articles in a manner different than we used to. Traditional news journalism was 
read or recieved through newspapers or some other form of once-daily edification. Now we 
no longer seek this form of keeping up to date with what is going on in the world, rather 
we tend to find information and news through articles online. Now, rather than articles 
being selected for users based upon their relevance and importance, these articles and 
authors need to find a way to make the user more likely to click on and read their writing. 
Many of these articles have maintained journalistic integrity in keeping with some set of 
standards, whereas some have tended towards other means of gaining user interest.  

Many make the claim online that some of the articles use strong emotions to make users 
more interested in the information therein. Either articles can have headlines that are 
very positive (happy inducing, perhaps) or negative (anger or sadness inducing, maybe).  

Based upon these claims, I was curious to see if I could potentially look at the headlines 
of many different news agencies and see if I could determine how much emotion was being 
utilized therein. I found that quite a majority of the articles that I had looked at were 
still fairly neutral, though there will still many an occasion of strong emotion persent.  

To analyze emotions in text, I used vader sentiment analysis, and used the compound score 
it gave for each article (which is on a scale of -1 to 0 to 1, with -1 being the most 
negative emotionally, and 1 being the most positive emotionally) to create graphs for a 
number of news agencies on how they have utilized emotions in their headlines over time.  

I was also able to calculate the average compound sentiment score for each news agency. 
Interestingly, all of them skewed positive. While there were many articles that were both 
very positive and very negitive from all of the groups, the overall skew was still positive. 
However, most of the articles in every agency was neutral and very close to a score of 0.  

There are some very important notes to make about the scores that I have, however, they are 
not tremendously accurate. Let's consider a news agency with three articles, each of which 
have a compound score of 0. Its average score then is a 0, and this is accurately reflected 
in its articles. What if it has three articles with scores of -1, 0, and 1? Then the average 
score would still be 0, but clearly they put out more emotionally charged (and perhaps 
divisive) articles. This bias, along with a lot more that I probably have not realized 
or accounted for, are likely to be prevalent in my scores.  

Below, you will see a table with all of average scores, both compound, positive, and negative 
scores for each agency.  

|Agency 	|Compound 	|Positive 	|Negative|
| :------| -----------:|-----------:|-----------:|
|The New York Times |	0.0261689 |	0.0192063| 	0.0046609|
|Breitbart| 	0.02408299 |	0.02090032 |	0.00665240|
|CNN 	|0.03414162 |	0.02843440 |	0.00503824|
|Business Insider 	|0.06110852 |	0.03306334 |	0.00388264|
|The Atlantic| 	0.02058144 |	0.01716854 |	0.00356693|
|Fox News |	0.04760875 |	0.03312206 |	0.00710000|
|Buzzfeed |	0.03076971 |	0.02058508 |	0.00535929|
|The National Review |	0.01993751 |	0.01858704 |	0.00496947|
|The New York Post |	0.05131073 |	0.03820476 	|0.00518698|
|NPR 	|0.02992590 	|0.02032171 |	0.00449541|
|Vox 	|0.04143098 	|0.02530119 |	0.00403961|
|The Washington Post |	0.03914736 |	0.02508142 |	0.00426336|
|Talking Points Memo |	0.02116882 |	0.01664933 	|0.00484788|
|The Guardian |	0.04446168 	|0.03017346 |	0.00564048|
|Reuters |	0.05193949 |	0.03652189 |	0.00503184|

From this table above, one can see that much of the data is fairly neutral in terms of emotion 
sparked. However, that is all simply based on one sentiment analysis model, only modern-ish 
articles, and without any data cleaning done. The only outstanding individuals are Reuters, 
Business Insider, Fox News, and the New York Post using more positive emotion generating 
headlines than others. On the other hand, we also see Fox News using the most negative emotion 
generating headlines (followed by Buzzfeed and The Guardian).  

I had also graphed some of these agencies with their data across time, and also created 
something of a line of best fit to track the average compound sentiment score over time.  

These can be seen below.  
