from flask import Flask,render_template,jsonify,request

app = Flask(__name__)


questions = [
	{
		'question': "Who is the Father of Python ?",
		'options' : [ 'Guido Van Rossum',"linus Torvalds","DanisRichi","John Hill"],
		'answer' : "Guido Van Rossum"
	},
	{
		'question': "Python Officially Launch in Year ? ",
		'options': [ 1991,1994,1996,1995],
		'answer': 1994
	},
	{
		'question': "Which is The Latest Version of Python ? ",
		'options': ["python2.7","python3.6","python3.7","python3.8"],
		'answer' :  "python3.7"
	}
] 


@app.route("/")
def index():
    return render_template("quiz.html")

@app.route("/favicon.ico")
def favicon():
    return ""

@app.route('/question/<int:ques>')
def question(ques=None):
    if ques < len(questions):
        new_ques = { 'question': questions[ques]['question'],'options':questions[ques]['options']}
        return jsonify(new_ques)
    else : 
        return jsonify(None)


@app.route('/check_question/',methods=['POST','GET'])
def check():
    ques = request.form['ques']
    ans = request.form['answer']
    print(ques,ans)
    if str(questions[int(ques)]['answer']) == ans : 

        return jsonify(True)
    else : 
        return jsonify(False)
if __name__ == "__main__" : 

    app.run(debug=True)