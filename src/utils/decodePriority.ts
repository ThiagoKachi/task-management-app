export function decodePriority(priority: string) {
  switch (priority) {
    case 'low':
      return 'Baixa';
    case 'medium':
      return 'Média';
    case 'high':
      return 'Alta';
    default:
      return 'Baixa';
  }
}
