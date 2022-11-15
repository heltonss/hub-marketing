const messages = [
  "Economize com essa oferta",
  "Que tal essa oferta para alegrar seu dia",
  "⏰ Hora de oferta ... venha conferir"
]

const generator = (messages: string[]) => {
  const qtdMessages = messages.length;
  const position = Math.floor(Math.random() * qtdMessages);
  return messages[position]
}

export function messageGenerator(): string {
  return generator(messages);
}
