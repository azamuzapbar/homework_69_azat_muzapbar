import json
from django.http.response import JsonResponse


def add(request, *args, **kwargs):
    answer = {}
    if request.body:
        numbers = json.loads(request.body)
        try:
            number_a = float(numbers['A'])
            number_b = float(numbers['B'])
            result = number_a + number_b
            answer['result'] = result
        except ValueError:
            answer['error'] = 'data is not numeric or it is an error occurs during calculation'
            return JsonResponse(answer, status=400)
    return JsonResponse(answer)


def subtract(request, *args, **kwargs):
    answer = {}
    if request.body:
        numbers = json.loads(request.body)
        try:
            number_a = float(numbers['A'])
            number_b = float(numbers['B'])
            result = number_a - number_b
            answer['result'] = result
        except ValueError:
            answer['error'] = 'data is not numeric or it is an error occurs during calculation'
            return JsonResponse(answer, status=400)
    return JsonResponse(answer)


def multiply(request, *args, **kwargs):
    answer = {}
    if request.body:
        numbers = json.loads(request.body)
        try:
            number_a = float(numbers['A'])
            number_b = float(numbers['B'])
            result = number_a * number_b
            answer['result'] = result
        except ValueError:
            answer['error'] = 'data is not numeric or it is an error occurs during calculation'
            return JsonResponse(answer, status=400)
    return JsonResponse(answer)


def divide(request, *args, **kwargs):
    answer = {}
    if request.body:
        numbers = json.loads(request.body)
        try:
            number_a = float(numbers['A'])
            number_b = float(numbers['B'])
            result = number_a / number_b
            answer['result'] = result
        except ValueError:
            answer['error'] = 'data is not numeric or it is an error occurs during calculation'
            return JsonResponse(answer, status=400)
        except ZeroDivisionError:
            answer['error'] = "Division by zero!Error"
            return JsonResponse(answer, status=400)
    return JsonResponse(answer)


