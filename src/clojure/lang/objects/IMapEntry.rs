//! Protocol IMapEntry

use crate::*;
use clojure::rust::*;
// use clojure::lang::*;

pub trait IMapEntry: IObject + Entry {
}