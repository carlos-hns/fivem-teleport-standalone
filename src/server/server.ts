import { Position } from "../shared/position";

const config = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "veneza",
  },
};

const knex = require("knex");

async function realizarConsulta(playerId: number) {
  const db = knex(config);

  try {
    const rows = await db
      .select("*")
      .from("vrp_users_identity")
      .where("id", playerId);

    setImmediate(() => {
      console.log(rows);
    });
  } catch (error) {
    console.error(error);
  } finally {
    db.destroy();
  }
}

RegisterCommand(
  "tpH",
  function (playerThatSentRequest: number, args: string[], raw: string) {
    realizarConsulta(playerThatSentRequest);

    setImmediate(() => {
      console.log(args.length);
    });

    if (args.length !== 3) {
      setImmediate(() => {
        emitNet("chat:ServerMessage", playerThatSentRequest, {
          args: [
            "Nao foi possivel teleportar voce",
            "Por favor utilize /teleport x, y, z",
          ],
        });
      });

      return;
    }

    const coordinates: Position = {
      x: Number(args[0]),
      y: Number(args[1]),
      z: Number(args[2]),
    };

    emitNet("onTeleportPlayer", -1, playerThatSentRequest, coordinates);
  },
  false
);

RegisterCommand(
  "alou",
  function () {
    console.log("Comando executado com sucesso!");
  },
  false
);

console.log("teste");
