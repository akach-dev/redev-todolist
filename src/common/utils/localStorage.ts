/**
 * Сохраняет состояние в локальном хранилище браузера.
 *
 * @template T - тип состояния
 * @param {string} key - ключ для сохранения состояния
 * @param {T} state - состояние для сохранения
 */
export function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state)

  localStorage.setItem(key, stateAsString)
}

/**
 * Восстанавливает состояние из локального хранилища браузера.
 *
 * @template T - тип состояния
 * @param {string} key - ключ для восстановления состояния
 * @param {T} defaultState - значение по умолчанию, если состояние не найдено в хранилище
 * @returns {T} - восстановленное состояние
 */
export function restoreState<T>(key: string, defaultState: T) {
  let state = defaultState
  const stateAsString = localStorage.getItem(key)

  if (stateAsString !== null) {
    state = JSON.parse(stateAsString) as T
  }

  return state
}
