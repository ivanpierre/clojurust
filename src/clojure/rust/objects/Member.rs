//! # Access to `Member`s getters and setters of `Objects` inner structure.
//!
//! This will be part of the `Class` store.

// use intertrait::cast::*;

use clojure::rust::*;
// use clojure::lang::*;
use intertrait::*;

use crate::*;
castable_to!(SMember => [sync] IObject, Member);

pub struct SMember {
    name:   usize,
    class:  usize,
    getter: Object,
    setter: Object,
}

impl SMember {
    pub fn new(
        name: usize,
        class: usize,
        getter: Object, // function ?
        setter: Object, // function ?
    ) -> SMember {
        SMember {
            name,
            class,
            getter,
            setter,
        }
    }
}

pub trait Member: IObject {}

impl Member {}

impl Member for SMember {}

impl IObject for SMember {
    fn getClass<'a>(&self) -> &'a SClass { todo!() }

    fn hashCode(&self) -> usize { todo!() }

    fn equals(
        &self,
        other: &Object,
    ) -> bool {
        todo!()
    }

    fn toString(&self) -> String { todo!() }
}
