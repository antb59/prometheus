#! /usr/bin/python
# -*- coding:utf-8 -*-

import time
from flask import Flask, jsonify, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/toggle',methods=['POST'])
def toggle():
   return redirect('/')

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)

