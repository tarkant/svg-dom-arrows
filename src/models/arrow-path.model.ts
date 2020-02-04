export interface ArrowPath {
    offset: Offset;
    size:   Size;
    points: string;
    head:   Head;
}

export interface Head {
    degree?: number; // TODO: Review this
    radius?: number; // TODO: Review this
    x:      number;
    y:      number;
}

export interface Offset {
    x: number;
    y: number;
}

export interface Size {
    width:  number;
    height: number;
}
