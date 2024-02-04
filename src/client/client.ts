import { Position } from "../shared/position";

onNet("onTeleportPlayer", function (playerId: number, position: Position) {
  const playerPed = GetPlayerPed(GetPlayerFromServerId(playerId));

  SetEntityCoords(
    playerPed,
    position.x,
    position.y,
    position.z,
    false,
    false,
    false,
    false
  );

  if (playerPed === GetPlayerPed(-1)) {
    emit(
      "chat:addMessage",
      `${GetPlayerName(GetPlayerFromServerId(playerId))}`,
      `Teleportou você para [${position.x}, ${position.y}, ${position.z}]`,
      "Teleport Service"
    );
  }
});
