// 91/100 ??
class WineSelection {
  constructor(space) {
    this.space = Number(space);
    this.wines = [];
    this.bill = 0;
    this.bottleCount = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= this.bottleCount) {
      throw new Error("Not enough space in the cellar.");
    } else {
      this.bottleCount++;
      this.wines.push({
        wineName,
        wineType,
        price,
        paid: false,
      });
    }
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    price = Number(price);
    const data = this.wines.find((el) => el.wineName == wineName);

    if (!data) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (data && !data.paid) {
      this.bill += price;
      data.paid = true;
      return `You bought a ${wineName} for a ${price}$.`;
    }

    if (data.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
  }

  openBottle(wineName) {
    const data = this.wines.find((el) => el.wineName == wineName);

    if (!data) {
      throw new Error("The wine, you're looking for, is not found.");
    }

    if (data.paid) {
      this.bottleCount--;
      this.wines = this.wines.filter((el) => el.wineName !== wineName);
      return `You drank a bottle of ${wineName}.`;
    } else {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
  }

  cellarRevision(wineType) {
    let emptySlots = this.space - this.bottleCount;
    let winesByType = this.wines.filter((el) => el.wineType === wineType);
    let sortedWines = [...this.wines];

    if (!wineType) {
      sortedWines.sort((a, b) => a.wineName.localeCompare(b.wineName));
      let revisionResult = `You have space for ${emptySlots} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
      return (revisionResult += sortedWines.map((wine) => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`).join("\n"));
    } else if (winesByType.length === 0) {
      return `There is no ${wineType} in the cellar.`;
    } else {
      return winesByType.map((wine) => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`).join("\n");
    }
  }
}

// const selection1 = new WineSelection(5);
// console.log(selection1.reserveABottle("Sauvignon Blanc Marlborough", "White", 50));
// console.log(selection1.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120));
// console.log(selection1.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
// console.log("----------");
// const selection2 = new WineSelection(2);
// const selection3 = new WineSelection(2);
// console.log(selection3.reserveABottle("Sauvignon Blanc Marlborough", "White", 50));
// console.log(selection3.payWineBottle("Sauvignon Blanc Marlborough", 120));
// console.log(selection3.payWineBottle("Bodegas Godelia Mencía", 144));
// console.log("----------");
// const selection3 = new WineSelection(2);
// selection3.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// selection3.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
// selection3.payWineBottle("Sauvignon Blanc Marlborough", 50);
// console.log(selection3.openBottle("Sauvignon Blanc Marlborough"));
// console.log(selection3.openBottle("Cabernet Sauvignon Napa Valley"));
// console.log("----------");
// const selection4 = new WineSelection(2);
// console.log(selection4.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
// console.log(selection4.cellarRevision("Rose"));
// console.log("----------");
const selection5 = new WineSelection(5);
selection5.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);
selection5.payWineBottle("Bodegas Godelia Mencía", 144);
selection5.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
selection5.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
console.log(selection5.cellarRevision("Red"));
console.log(selection5.sortingFunc());
