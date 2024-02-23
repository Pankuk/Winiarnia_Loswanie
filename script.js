function pokazCzas() {
    let dzisiaj = new Date();
    let godzina = dzisiaj.getHours();
    let minuta = dzisiaj.getMinutes();
    

    // Dodaj zero z przodu, jeśli liczba jest mniejsza niż 10
    minuta = dodajZero(minuta);
    

    let czas = godzina + ":" + minuta ;
    document.getElementById('czas').innerHTML = czas;

    // Odświeżanie co sekundę
    setTimeout(pokazCzas, 1000);
  }

  function dodajZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }