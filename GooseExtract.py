from goose3 import Goose
import json
#from prediction import detecting_fake_news
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 

#url = input("Please enter the url of the news")
#print("You have entered :"+ str(url))

# This is the setting up configuration of the scrapper
def Scrape(url):
	Scrape = Goose()
	NewsArticle = Scrape.extract(url=url)
	return NewsArticle
#print(NewsArticle.title)
#print(NewsArticle.meta_description)
#print(NewsArticle.cleaned_text)
#detecting_fake_news(NewsArticle.title)

def Cleaning(body,filteredtext):
	stop_words = set(stopwords.words('english')) 
	file1 = open(body) 
	line = file1.read()
	words = line.split() 
	for r in words:
		if not r in stop_words:
			appendFile = open(filteredtext,'a')
			appendFile.write("",+r)
			appendFile.close() 
	return filteredtext

#compare
def Tokenize(Sentence):
	stop_words = set(stopwords.words('english')) 
  
	word_tokens = word_tokenize(Sentence) 
  
	filtered_sentence = [w for w in word_tokens if not w in stop_words] 
  
	filtered_sentence = [] 
  
	for w in word_tokens:
		if w not in stop_words:
			filtered_sentence.append(w)
  
	#print(word_tokens) 
	#print(filtered_sentence) 	
	return filtered_sentence

def CalculatePositivityScore(value,Positivity,length):
	valueTemp = 0
	PositivityScoreTemp = 0
	if Positivity == 1:
		if value > (length*2**2)/2:
			value = (value + 10000-value)/10000
			Positivity = (value - length)/value
		else:
			value = 10000
			Positivity = -1
	else:
		if value > (length*2**2)/2:
			value = ((value + 10000-value)/10000) * Positivity
			Positivity = ((value - length)/value) * Positivity
		else:
			value = 10000 * Positivity
			Positivity = 0
	return value,Positivity

def McNemarTest(value,length):
	value = sorted(value, key=lambda k: k.get('value', 0), reverse=True)
	for words in value:
		if words['value'] > length:
			return 0
		else:
			words['value'] = (words['value'] + 1) * words['Positivity']
	return words


def NegationTelltale():
	NegativeFile = open("neg.txt","r")
	NegativeWords = NegativeFile.read().split('\n')
	return NegativeWords
#a = "i 2-faced my country love is good"
#b = "i 2-faced my country. country good is god"
def Comparison(url):
	NewsArticle = Scrape(url)
	TokenizedHeader = Tokenize(NewsArticle.title)
	TokenizedBody = list()
	BodyList = NewsArticle.cleaned_text.split('.')
	for sen in BodyList:
		TokenizedBody.append(Tokenize(sen))
	#print(TokenizedHeader)
	#print(TokenizedBody)
	NegativeWords = NegationTelltale()
	positive = 1
	negative = 0.5
	for words in NegativeWords:
		if words in TokenizedHeader:
			positive = 0.5
			negative = 1



	model = []
	data = {}
	for eachSentence in BodyList:
		data['Sentence'] = eachSentence
		data['value'] = 0
		data['Positivity'] = positive
		for words in TokenizedHeader:
			if words in eachSentence:
				data['value'] = data['value'] + 1
		json_data = json.dumps(data)
		model.append(json.loads(json_data))
	#print(model)
	McNemarWords = McNemarTest(model,len(model))
	i = 0
	for eachSentence in BodyList:
		for word in NegativeWords:
			if word in eachSentence:
				model[i]['Positivity'] =  negative
		i = i + 1

	#print(model)

#scoring technique
	
	model = sorted(model, key=lambda k: k.get('value', 0), reverse=True)
	values,prob = CalculatePositivityScore(model[0]['value'],model[0]['Positivity'],len(model))
	TotalScore = 0
	for value in model:
		if value['value'] >= 2:
			TotalScore = TotalScore + value['value']
	score = 0
	ConsideredWords = 2
	for sen in model:
		if sen['value'] >= ConsideredWords:
			score = score + sen['value'] * sen['Positivity']


	#print(TotalScore)
	#print(score)
	if TotalScore == 0:
		return 1
	probabilityScore = score/TotalScore

	#print(probabilityScore)
	return probabilityScore



