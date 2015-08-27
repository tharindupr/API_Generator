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
    api=[['/'+model]]     #add all the things required for the api.js
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
            api[0].append({'post':'save'})
        if(i=='get'):
            file.write("exports.see = function(req, res) {\n")
            file.write(model[:-1].title()+".find(function(err, val) {\n")
            file.write("if (err)\n\tres.send(err);\n\t\tres.json(val);\n}); \n};")
            api[0].append('get:see')
    file.close()
    return(api)

def addRoutes(controller,routes):
    f = open("routes//api.js", "r")
    contents = f.readlines()
    f.close()

    #adding the link of controller to API
    contents.insert(2,"var "+controller+"Controller = require('../controllers/"+controller+"');\n")
    contents.insert(8,"router.route('/"+controller+"s')\n")
    for route in routes:
        r=route[0]
        
        for i in route:
            if(i.rsplit(':')[0]=='get'):
                     
                     contents.insert(10,"\t.get("+controller+"Controller."+i.rsplit(':')[1]+");\n")

                     
    f = open("routes//api.js", "w")
    contents = "".join(contents)
    f.write(contents)
    f.close()
    
    
#Loading the YAML into a dictionary.
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
    
    print(createMongoController(elements,data[elements]))
