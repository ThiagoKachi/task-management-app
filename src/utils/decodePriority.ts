export function decodePriority(priority: string) {
  switch (priority) {
    case 'easy':
      return 'Fácil';
    case 'medium':
      return 'Médio';
    case 'high':
      return 'Difícil';
    default:
      return 'Díficil';
  }
}
