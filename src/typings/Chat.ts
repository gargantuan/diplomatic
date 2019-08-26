export interface Game {
  id: string;
  title: string;
  hostId: string;
  playerIds: string[];
  variant: string;
  moveFrequency: string;
  nextMove: string;
}

export interface Chat {
  id: string;
  gameId: string;
  recipients: string[];
  isTyping: string[];
}

export interface Message {
  id: string;
  chatId: string;
  gameId: string;
  authorId: string;
  text: string;
  time: string;
  recipients: string;
}
