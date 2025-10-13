---
title: Generated Poe-try
type: docs
weight: 10
bookHidden: true
---

# Edgar Allen Poe-try

> the day broke it  
so strong and a willingness  
to let it atone   

I have been interested in language modeling for a while, and I have done many projects in that realm in the 
past. Firstly, langauge modeling is the use of a technique to determine the probablility of a sentence occuring
 with the words in it in that order. It is frequently used to create computer algorithms that will create 
 intelligible sentences based upon some text corpus.  

I first began working with language models with the bag of words method, which simply categorizes all of the 
words in some given text into it based upon their appearance in the text. We can then take this categorization 
and output a randomized string of words based upon some randomness and word commonality. Using this method 
created sentences like this:  

> too, no best than about clearly in know of in made of the the side one the of and the are customer From spots
having found majority, from was been I-as Touch-me-Not a double The having armed dropped rank but which mer_. 
well week-once  

Yeah, it isn't very good, but it was a start. I then moved on to n-gram models. This effectively takes n - 1 words 
and uses them to predict the next word. So say we have a bi-gram (2-gram), this means that we can take a sentence 
and break it upon into groups of two words:  

> There is a dog named Allen.

> **[ (There, is), (is, a), (a, dog), (dog, named), (named, Allen) ]**  

Using the occurences of bundled words together, when we give an algorithm a word, it can determine what comes 
next based upon the previous word (what normally comes up based upon our text corpus). I attemped to create an
 algorithm that worked based upon this method a while ago, though I believe that I created it incorrectly or
 did it poorly, because the final sentences again weren't that great:  
 
> no psyche within none within hair of like i brilliant i of thee in shore vogue land shore the native thy seas 
too whole grandeur agate thee stand inner long its here scorn ere scorn was byron which it safely remarkable 
estimate teens can none grandeur withering lamp withering  

I did, much later get back into language modeling. For a class project, a friend and I decided to create a trigram
 model, which is effectively the same as a bigram model but with n = 3. So that previous sentence would be broken 
 down like this:  
 
> There is a dog named Allen.

> **[ (There, is, a), (is, a, dog), (a, dog, named), (dog, named, Allen) ]**


So instead of looking at the previous word to determine the next word, we would look at the previous two words to
 determine the next, and so on so forth. For this project (and all the previous), we used a library called `nltk`. 
 This effectively just makes created all those bigrams and trigams much easier than they would otherwise be, and 
 they make creating the models much easier. Our final product ended up being much better than the previous 
 examples, as the following sentences exhibits (note that we used the novel "The Count of Monte Cristo" for our 
 text corpus here, whereas for the previous projects I had used a text corpus of Edgar Allen Poe stories):  
 
> and then drew himself up with happiness, looking for all that you had conveyed a packet for Marshal Bertrand.

> the night of my heart. Is it really your intention to make me captain of the city.

Yeah, those sentences aren't that bad, I think.  


More recently, I wanted to try to use a similar trigram algorithm on Edgar Allen Poe writing to create haikus. This
 would, of course, not only require text generation, but also need to have a way to convert the sentences that my 
 text generation algorithm would create into haikus. Before I go on too far into that, let's first look at the 
 trigram model itself. Firstly, we need to open the text file and create the model:  

```python
model = defaultdict(lambda: defaultdict(lambda: 0))
file = open("EAPStories.txt", 'r')
```

The second line just opens the text file to be read only, while the first line creates the base for the model 
itself. Effectively what it is doing is creating a dictionary within a dictionary. This allows us to pair two 
words together to determine what the next possible words could be.  

```python
for line in file:
	for w1, w2, w3 in trigrams(line.lower().split(), pad_right=True, pad_left=True):
		model[(w1, w2)][w3] += 1

		total_occurence = 0
		for occurence in model['the', 'day'].values():
		total_occurence += occurence

		for w1w2 in model:
		for w3 in model[w1w2]:
		model[w1w2][w3] = model[w1w2][w3] / total_occurence

dict(model['and', 'then'])
```

```
{'went': 0.015151515151515152,
'obtain': 0.015151515151515152,
'i': 0.12121212121212122,
'returned,': 0.015151515151515152,
'from': 0.030303030303030304,
'caught': 0.015151515151515152,
'the': 0.16666666666666666,
'universal': 0.015151515151515152,
'felt': 0.015151515151515152,
None: 0.12121212121212122,
...
'producing': 0.015151515151515152}
```

This code firstly goes through every line in the text file and splits the words up in very similar fashion
 to that of the "There is a dog named Allen" example I'd previously shown. The rest of the code takes every 
 single possible third word to the first two words in the trigram, and determines the probability and word 
 will come next based upon the total number of possibilities. This can be seen in the output, which is showing 
 all of the possible concluding words to the two words "and" and "then". Each word is correlated to a 
 probability of its occurence. The "None" which can be seen as well just dictates the end of the sentence.  
 
```python
def create_sentence(word1, word2):
	sentence = [word1, word2]
	sentence_complete = False
	total_words = 0
	num_words = 2

	while not sentence_complete:
		min_words = random.random()

		for word in model[tuple(sentence[num_words - 2:])].keys():

			total_words += model[tuple(sentence[num_words - 2:])][word]

			if total_words >= min_words:
				sentence.append(word)
				num_words += 1
				break

		if sentence[num_words - 2:] == [None, None]:
			sentence_complete = True

	sentence_str = ""
	for word in sentence:
		if word != None:
			sentence_str = sentence_str + word + " "

	print("create_sentence:", sentence_str)

	return sentence
```


While analyzing our data visually is indeed very useful, it is also helpful to analyze our data 
quantitatively. Here, we can also use some Python to calculate the returns between our start and end date 
and we can also use this to determine an average return across each year (or month if we wanted to do that 
as well).  

```python
days = 1000
years = days / 365

final_returns = 100*(np.exp(log_returns.cumsum()) - 1)[-1]

print('Return from start date to end date is: ' + '{:.2f}'.format(final_returns) + '%')

final_returns_per_year = final_returns / years

print('Average yearly return: ' + '{:.2f}'.format(final_returns_per_year) + '%')
```
	
```
Return from start date to end date is: 178.52%
Average yearly return: 65.16%
```

This is finally the code that creates our sentences. What we are effectively doing is setting a random 
probability that we want each of our next words to achieve at a threshold. Then we continuously add
 these words to a list that will become our sentence. The sentence ends once we hit the word "None" 
 (which refers to no word) twice.  

This is similar to what we had done for the Monte Cristo trigam model, but I have changed some of the 
methods involved for simplicities sake.  

The rest of the program will generate a sentence using the above function, checks how many syllables 
are in each word, and then attempt to create the three haiku lines with those words in their proper 
order. If it can't, it scraps that sentence and generates a new one. This keeps going until a haiku 
is created. You can see one of the haikus that the algorithm generated at the top of this page.  