export type TPoint = {
  el?: HTMLElement,
  id?: number,
  parent?: TCategory,
  time: number,
  wait: number
};

export type TCategory = {
  backColor: string,
  el?: HTMLElement,
  end: number,
  foreColor: string,
  id?: number,
  maxWait?: number,
  name: string,
  parent?: TSequence,
  points: TPoint[],
  start: number,
  stat?: TStat
};

export type TCategoryLabel = {
  backColor: string,
  foreColor: string,
  name: string
};

export type TSequence = {
  avgWait?: number,
  categories: TCategory[],
  el?: HTMLElement,
  end: number,
  id?: number,
  relHeight?: number,
  start: number
};

export type TStat = {
  median?: number,
  q25?: number,
  q50?: number,
  q75?: number,
  std?: number
};
