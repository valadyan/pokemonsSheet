  private http = inject(HttpClient);
  GetCatalog() {
    return this.http.get("https://pokeapi.co/api/v2/ability/")
  }
