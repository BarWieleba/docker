# docker

Zbudowanie obrazu Dockera dla tej aplikcji bez klonowania repozytorium na komputer użytkownika
polega na użyciu w komendzie `build` linku do repozytorium.

	`docker build https://github.com/BarWieleba/docker.git -t clock_website:v1`

Komenda ta buduje obraz bazując nie na plikach lokalnych ale na tych na repozytorium.

Uruchomienie obrazu w kontenerze wymaga użycia polecenia
	`docker run -d -p 80:80 clock_website:v1`
Dzięki tej komendzie uruchomiliśmy kontener na bazie tego obrazu i możemy odwiedzić
naszą stronę poprzez wpisanie IP naszego komputera w przeglądarce.
