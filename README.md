# nswn
gpla new student welcome night site


## Introduction

Hi friends! We're using Flask/jinja2 for our site. Figuring out a lot of other details atm. 

## Getting Started

To run the site, you'll need to set up a python virtual environment. It's a 
different process based on your os, but here's tutorials for
 [windows](https://programwithus.com/learn-to-code/Pip-and-virtualenv-on-Windows/)/
 [mac](https://sourabhbajaj.com/mac-setup/Python/virtualenv.html)/
 [linux](https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/).

Once you have the virtual environment installed, source/activate it. Then, cd 
into the the base directory of the repository, and you can install the 
project dependencies using:

    `pip install -r requirements.txt`

Then to run the server, from the root directory, run:

    `FLASK_APP=app.py FLASK_ENV=development flask run`

Then, navigate to http://127.0.0.1:5000/ in your browser. 

Alternatively, once you have set up everything, you can use:

	`./rundev`

To launch the page and run the flask server (you may need to refresh the page)

## Issue list
If pip `could not find a version that satisfies the requirement [xxx]`, you
might be running Python 2.7
Solution may be running this instead (at least for Ubuntu/Linux):

	`python3 -m pip install -r requirements.txt`
