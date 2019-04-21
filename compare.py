import json

model = []
data = {}
print(model)
data['string'] = "trsump is president"
data['value'] = 3
json_data = json.dumps(data)
model.append(json.loads(json_data))
print(json_data)
data['string'] = "trump is president"
data['value'] = 4
json_data = json.dumps(data)
print(json_data)
model.append(json.loads(json_data))
model[1]['value'] = model[1]['value'] +1
print(model[0]['value'])
print(model)

print(len(model[0]))

model = sorted(model, key=lambda k: k.get('value', 4), reverse=True)
i=0
for value in model:
	if value['value'] > 2:
		i = i + 1
print(model)
print(i)