from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_chart_data(request):
    data = {
        "candlestick": [
            {"time": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"time": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
        ],
        "line_chart": [10, 20, 30, 40, 50],
        "bar_chart": [5, 15, 25, 35, 45],
        "pie_chart": {"apples": 20, "bananas": 30, "grapes": 50}
    }
    return Response(data)
