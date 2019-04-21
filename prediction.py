# -*- coding: utf-8 -*-
"""
Created on Mon Dec  4 17:45:40 2017

@author: NishitP
"""

import pickle
from GooseExtract import *
#doc_new = ['obama is running for president in 2016']

var = input("Please enter the URL of news text you want to verify: ")
print("You entered: " + str(var))


#function to run for prediction
def detecting_fake_news(var):    
#retrieving the best model for prediction call
    load_model = pickle.load(open('final_model.sav', 'rb'))

    url = Scrape(var)
    data = url.cleaned_text
    #print(type(data))
    #print(type(var))
    prediction = load_model.predict([data])
    prob = load_model.predict_proba([data])
    HeaderBodyComp = Comparison(var)

    #print(HeaderBodyComp)
    #print(type(HeaderBodyComp))
    FinalScore = (prob[0][1] * 0.9) + (HeaderBodyComp * 0.1)
    #print(FinalScore)
    #print(type(FinalScore))

    return (print("The given statement is ",prediction[0]),
        print("The truth probability score is ",FinalScore))


if __name__ == '__main__':
    detecting_fake_news(var)