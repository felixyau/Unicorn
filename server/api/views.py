from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

# from .serializers import ProductSerializer, QuestionSerializer, UserResponseSerializer
# from .models import Product, Questions, UserResponse
from .serializers import QuestionSerializer, UserResponseSerializer
from .models import Questions, UserResponse
from .ML import knn_model
import joblib
import json



# Create your views here.


def process(userResponse):
    #dic = json.loads(userResponse)

    dic = userResponse
    ls = []

    for i,j in dic.items():
        dic[i] = int(dic[i])
        ls.append(dic[i])
    
        
    result = knn_model.predict(ls[0],ls[1],ls[2],ls[3],ls[4],ls[5],ls[6],ls[7],ls[8],ls[9],ls[10])
    
    return result

#getting questions as json
@api_view(['GET'])
def getQuestions(request):
    questions = Questions.objects.all()
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createQuestions(request):
    serializer = QuestionSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()


    return Response(serializer.data)

#ML model 
@api_view(['POST'])
def diagnoseUser(request):
    serializer = UserResponseSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        #can add ML process here
        r = process(request.data)
        return Response("isvalid")
    return Response(serializer.data)
#can return ML result

