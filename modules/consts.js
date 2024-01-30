#!/usr/bin/env babel

const FULL_SCREEN = { x: 0, y: 0, width: 1, height: 1 };
const LEFT_HALF = { x: 0, y: 0, width: 0.5, height: 1 };
const RIGHT_HALF = { x: 0.5, y: 0, width: 0.5, height: 1 };

const QUARTER1 = { x: 0, y: 0, width: 0.25, height: 1 };
const QUARTER2 = { x: 0.25, y: 0, width: 0.25, height: 1 };
const QUARTER3 = { x: 0.5, y: 0, width: 0.25, height: 1 };
const QUARTER4 = { x: 0.75, y: 0, width: 0.25, height: 1 };
const CENTER_HALF = { x: 0.25, y: 0, width: 0.5, height: 1 };

const LEFT_RATIO = { x: 0, y: 0, width: RATIO, height: 1 };
const RIGHT_RATIO = { x: RATIO / 2, y: 0, width: RATIO, height: 1 };

const LEFT_ANTIRATIO = { x: 0, y: 0, width: 1 - RATIO, height: 1 };
const CENTER_ANTIRATIO = { x: 1 - RATIO, y: 0, width: 1 - RATIO, height: 1 };
const RIGHT_ANTIRATIO = { x: 1 - RATIO / 2, y: 0, width: 1 - RATIO, height: 1 };

const TOP_HALF = 'top-half';
const BOTTOM_HALF = 'bottom-half';
