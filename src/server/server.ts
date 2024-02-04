import { Position } from "../shared/position";

RegisterCommand(
  "tpH",
  function (playerThatSentRequest: number, args: string[], raw: string) {
    if (args.length !== 3) {
      setImmediate(() => {
        emitNet(
          "chat:ServerMessage",
          playerThatSentRequest,
          "Nao foi possivel teleportar voce",
          "Por favor utilize /teleport x, y, z"
        );
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
