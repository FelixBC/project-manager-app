/**
 * projects-storage.ts
 *
 * Thought process:
 * - localStorage only stores strings, keyed by a name (like a tiny browser-only KV store).
 * - We keep one string per key: the whole projects list as JSON.
 * - READ:  get string → JSON.parse → JavaScript array. ( send it to the browser and parse it to the languaje he knows JSON)
 * - WRITE: array → JSON.stringify → set string. 
 *
 * Common real uses: theme, drafts, flags. For multi-user / authoritative data → API + DB.
 * This file is fine for your demo and for learning routing + persistence.
 */

/** One constant so /new and /list never typo different keys. */
export const PROJECTS_STORAGE_KEY = "pm.projects";

/**
 * Shape saved in localStorage (JSON-safe: strings + booleans).
 * Matches your form fields; add fields here only if they’re serializable.
 */
export type StoredProject = {
  id: string;
  name: string;
  isActive: boolean;
  beginDate: string;
  endDate: string;
  description: string;
};

/**
 * READ every project from localStorage.
 *
 * Step by step:
 * 1) getItem → string | null (null = nothing saved yet).
 * 2) No data → return [] (empty list is valid).
 * 3) JSON.parse → turn string into JS (we expect an array).
 * 4) If not an array or parse throws → return [] so the UI never crashes.
 */
export function readProjectsFromStorage(): StoredProject[] {
  try {
    const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as StoredProject[];
  } catch {
    return [];
  }
}

/**
 * WRITE the full list back.
 *
 * We always replace the whole value for this key.
 * Simple for demos: true source of truth is the full array string.
 */
export function writeProjectsToStorage(projects: StoredProject[]): void {
  const raw = JSON.stringify(projects);
  localStorage.setItem(PROJECTS_STORAGE_KEY, raw);
}

/**
 * Add one project to whatever is already stored.
 *
 * Array thought process:
 * - existing = old list from disk
 * - [...existing, newProject] = NEW array = all old items + one new item at the end
 *   (spread copies items out of existing into a fresh array; we avoid mutating existing)
 */
export function appendProjectToStorage(newProject: StoredProject): void {
  const existing = readProjectsFromStorage();
  const updated = [...existing, newProject];
  writeProjectsToStorage(updated);
}
