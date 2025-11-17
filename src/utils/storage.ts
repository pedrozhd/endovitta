export const storage = {
  setUser: (user: any) => localStorage.setItem('endovitta_user', JSON.stringify(user)),
  getUser: () => {
    const user = localStorage.getItem('endovitta_user');
    return user ? JSON.parse(user) : null;
  },
  setSymptomLogs: (logs: any[]) => localStorage.setItem('endovitta_logs', JSON.stringify(logs)),
  getSymptomLogs: () => {
    const logs = localStorage.getItem('endovitta_logs');
    return logs ? JSON.parse(logs) : [];
  },
  clearAll: () => {
    localStorage.removeItem('endovitta_user');
    localStorage.removeItem('endovitta_logs');
  },
};
