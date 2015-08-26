import yaml
import json

#creating a model that maps to a mongo schema
def createMongoModel(model,schema):
    file=open(model[:-1]+".js","w")
    file.write("var mongoose     = require('mongoose');\n"+"var Schema= mongoose.Schema;\n")
    file.write("var "+model[:-1].title()+"Schema   = new Schema({\n")
    
    file.write(schema+"\n")
    file.write("});\n")
    file.write("module.exports = mongoose.model('"+model[:-1].title()+"', "+model[:-1].title()+"Schema);")
    file.close()
    
#creating a controller that maps to the model
def createMongoController(model,requests):
    print model
    print requests
    schema=requests['schema'].split(" ")
    print schema
    del requests['schema']
    file=open('controllers//'+model[:-1]+".js","w")
    file.write("var "+model[:-1].title()+" = require('../models/"+model[:-1]+"');\n\n")
    for i in requests:
        
        if(i=='post'):
            file.write("exports.save = function (req, res) {\n")
            file.write("var "+model[:-1]+"= new "+model[:-1].title()+"();\n")
            for j in schema:    #getting the parameters into the abov object
                param=j.rsplit(':')[0]
                file.write(model[:-1]+"."+param+"=req.body."+param+";\n")
            file.write(model[:-1]+".save(function(err) {\n")
            file.write("if (err) res.send(err);\nres.json({ message: 'created!' });\n});\n};\n\n")
    file.close()
#Loading the YAML into a dict.
yml = open("test.YAML","r")
data = yaml.load(yml)



baseUri=data['baseUri']
title=data['title']
version=data['version']
del data['baseUri']
del data['title']
del data['version']



for elements in data:
    createMongoModel(elements,data[elements]['schema'].replace(" ",","))
    
    createMongoController(elements,data[elements])
