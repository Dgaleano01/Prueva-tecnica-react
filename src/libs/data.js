export async function getData(condicion){
        const data = await fetch("/sample.json");
        const response = await data.json();
        const result = response.entries.filter(
          (serie) => serie.releaseYear >= 2010 && serie.programType === condicion
        );
        const orderSeries = result.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          }
          return 0;
        });

        const limitSeries = orderSeries.slice(0, 20)
        return limitSeries;
      }
