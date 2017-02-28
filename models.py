# models.py
import flask_sqlalchemy 
import app
import os

# app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://potato:potatosareawesome@localhost/postgres'

db = flask_sqlalchemy.SQLAlchemy(app.app)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True) # key
    message = db.Column(db.String(200))
    name    = db.Column(db.String(200))
    picture = db.Column(db.String(200))
    
    def __init__(self,n,p,m):
        
        self.name = n
        self.picture = p
        self.message = m
       
        
    def __repr__(self): # what's __repr__?
        return '<Message text: %s>' % self.text
    
    
    
    
    
    
 