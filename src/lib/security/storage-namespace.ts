export const nemLifeStoragePrefix = "nem-life";

export function isNemLifeStorageKey(key: string): boolean {
  return key.startsWith(`${nemLifeStoragePrefix}-`) || key.startsWith(`${nemLifeStoragePrefix}.`);
}

export function removeNemLifeStorageKeys(storage: Storage, allowedKeys?: readonly string[]) {
  const keys = Array.from({ length: storage.length }, (_, index) => storage.key(index)).filter(
    (key): key is string => Boolean(key),
  );
  const candidates = allowedKeys ?? keys.filter(isNemLifeStorageKey);
  candidates.forEach((key) => {
    if (isNemLifeStorageKey(key)) storage.removeItem(key);
  });
  return candidates.filter(isNemLifeStorageKey);
}
