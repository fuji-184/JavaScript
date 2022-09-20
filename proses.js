	class Gempa {
		constructor(lokasi, skala){
			this.lokasi = lokasi;
			this.skala = skala;
		}

		dampak(){
			if(this.skala <= 2){
				this.dampakGempa = "Tidak Terasa";
			}
			else if(this.skala > 2 && this.skala <= 4){
				this.dampakGempa = "Bangunan retak-retak";
			}
			else if(this.skala > 4 && this.skala <= 6){
				this.dampakGempa = "Bangunan roboh";
			}
			else if(this.skala > 6){
				this.dampakGempa = "Bangunan roboh dan berpotensi Tsunami";
			}
		return this.dampakGempa;
		}

		infoGempa(no){
			document.write(`
				<tr>
					<td>${no}</td>
					<td>${this.lokasi}</td>
					<td>${this.skala}</td>
					<td>${this.dampak()}</td>
				</tr>
				`)
		}
	}

	
		let g1 = new Gempa("Sumatra", 3);
		let g2 = new Gempa("Bali", 4);
		let g3 = new Gempa("Samudra Pasifik", 7);
		let g4 = new Gempa("Laut Cina Selatan", 2);
		let g5 = new Gempa("Kalimantan", 5);
		let g6 = new Gempa("Selat Sunda", 1);
		let g7 = new Gempa("Yogyakarta", 6);
		let g8 = new Gempa("Sulawesi", 4);
		let g9 = new Gempa("Samudra Atlantik", 8);
		let g10 = new Gempa("Jakarta", 2);