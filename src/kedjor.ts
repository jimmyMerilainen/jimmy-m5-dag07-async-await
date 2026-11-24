// Dag 7, del 1: Skriv om från then-kedjor till async/await.
// De här funktionerna fungerar redan, men använder .then(). Skriv om VARJE funktion till
// en async function med await (och try/catch där det behövs). Beteendet ska bli exakt
// detsamma, så testerna ska fortsätta vara gröna. Testerna kontrollerar också att
// funktionerna är async.
import { hamtaRattFranServer } from "./fordrojning";
import { formateraPris } from "./pris";

export async function hamtaRattPris(id: number): Promise<number> {
  return await hamtaRattFranServer(id, 10).then((ratt) => ratt.pris);
}

export async function hamtaRattPrisEllerNoll(id: number): Promise<number> {
  return await hamtaRattFranServer(id, 10)
    .then((ratt) => ratt.pris)
    .catch(() => 0);
}

export async function hamtaOchFormatera(id: number): Promise<string> {
  return await hamtaRattFranServer(id, 10).then(
    (ratt) => `${ratt.namn}: ${formateraPris(ratt.pris)}`,
  );
}

export async function hamtaTvaPriser(
  id1: number,
  id2: number,
): Promise<number> {
  return await hamtaRattFranServer(id1, 10).then((ratt1) =>
    hamtaRattFranServer(id2, 10).then((ratt2) => ratt1.pris + ratt2.pris),
  );
}
