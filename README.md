# zadanie1
Rozwiązanie pirwszego zadania
 
Dockerfile
Pierwszy etap budowania aplikacji korzysta z obrazu node:14 i kopiuje pliki aplikacji do katalogu roboczego. Następnie instaluje zależności i wykonuje budowanie aplikacji. Wynikowy plik wykonywalny jest umieszczany w katalogu dist.

Drugi etap korzysta z obrazu node:14-slim i umieszcza w nim tylko te elementy, które są potrzebne do uruchomienia aplikacji. Kopiuje pliki z etapu budowania (używając --from=build), instaluje tylko potrzebne zależności i uruchamia aplikację.


 docker build -t zad1ob .
![image](https://github.com/hnidanka/zadanie1/assets/130184588/e3bff06b-438e-4819-9376-f28be9e6f90f)

docker run -d -p 5000:5000 --name zadanie1 zad1ob
![image](https://github.com/hnidanka/zadanie1/assets/130184588/391ae6b5-5594-4352-99b1-42ec64d59cfa)

 
 ![image](https://github.com/hnidanka/zadanie1/assets/130184588/64bf0266-3250-4dfc-93fb-f88598e40c43)
 Użyłam polecenia docker logs e5d
 ![image](https://github.com/hnidanka/zadanie1/assets/130184588/4527e566-25b7-431e-96c3-f3068678ced6)

 Użyłam polecenie docker history zad1ob
 ![image](https://github.com/hnidanka/zadanie1/assets/130184588/91fbb109-484e-4af4-a494-0bc376393342)

