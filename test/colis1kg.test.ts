import Engine, { serializeEvaluation, serializeUnit } from "publicodes";
import { describe, expect, test } from "vitest";
import rules from "../publicodes-build/index.js";
import { readFileSync } from "fs";

const situations = readFileSync(
  new URL("../situations/scenario.publicodes", import.meta.url),
  "utf8"
);

console.log(situations);

describe("Scénarios ICO2", () => {
  test("livraison colis 1kg", () => {
    const engine = new Engine(rules);
    engine.setSituation({
      "informations . catégorie": "'habillement'",
      "informations . poids": 1,
    });
    const livraisonDomicile = engine.evaluate(
      "livraison colis . scénario . domicile"
    );
    expect(livraisonDomicile.nodeValue).toBeCloseTo(722, 0);
  });

  //   test.each([
  //     [1957.5, 2500],
  //     [2740.5, 3500],
  //     [0, 0],
  //   ])("%f €/mois, avec salaire brut = %f €/mois", (empreinte, salaireBrut) => {
  //     const engine = new Engine(rules);
  //     engine.setSituation({ "livraison colis": salaireBrut });
  //     const result = engine.evaluate("livraison colis");

  //     expect(result.nodeValue).toBe(empreinte);
  //     expect(serializeUnit(result.unit)).toBe("gCO2e");
  //   });
});
