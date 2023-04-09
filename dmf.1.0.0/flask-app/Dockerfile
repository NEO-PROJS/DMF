# syntax=docker/dockerfile:1

FROM python:3.10.6-buster

WORKDIR /dmf-flask-app

COPY reqs.txt reqs.txt

RUN pip3 install -r reqs.txt

COPY . .

ENV FLASK_APP=run.py

EXPOSE "5050"

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=5050" ]