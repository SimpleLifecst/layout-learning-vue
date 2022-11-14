export function handleSaveActiveRoute(path: string) {
  sessionStorage.setItem('current-active-path', path);
}

export function getCurrentActivePath() {
  return sessionStorage.getItem('current-active-path');
}

export function isUseDefaultValue(name: string, defaultValue?: boolean) {
  if (window.sessionStorage.getItem(name) == null) {
    return defaultValue || false
  }

  if (window.sessionStorage.getItem(name) === 'false') {
    return false
  }

  return true
}
