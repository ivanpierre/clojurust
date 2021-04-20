//! # Stores for Rust `Objects` identified by unique string name
//!
//! There will be multiple stores:
//! * `Class`es
//! * `Prototype`s
//! * `Class`es and `Prototype`s' `Function`s.
//! * `Object`s' `Member`s' getter and setters.

use std::{fmt::*, sync::*};

use lazy_static::lazy_static;

// use intertrait::cast::*;

use crate::*;

use_obj! {
    clojure::rust::Object;
    clojure::rust::IObject;
    clojure::rust::ObjResult;
    clojure::rust::Class;
    clojure::lang::PersistentVector;
    clojure::rust::Unique;
}

castable_to!(SGlobals => [sync] IObject, Globals);

init_obj! {
    Globals {
        clojure::rust::Object::init();
        clojure::rust::IObject::init();
        clojure::rust::ObjResult::init();
        clojure::rust::Class::init();
        clojure::lang::PersistentVector::init();
        clojure::rust::Unique::init();
    }
}

#[derive(Debug)]
pub struct SGlobals {
    pub unique_name: Object, // SUnique
    pub obj_vect: Object,  // SObjVector
}

pub trait Globals: IObject + CastFromSync {
    /// Globals -> String -> Object -> Globals
    fn update(&mut self, name: &str, value: &Object) -> ObjResult<Object>;

    /// Globals -> usize -> Object
    fn get_obj_by_id(&self, index: usize) -> ObjResult<Object>;

    /// Globals -> String -> Object
    fn get_obj_by_name(&self, name: &str) -> ObjResult<Object>;

    /// Globals -> String -> usize
    fn get_id_for_name(&self, name: &str) -> ObjResult<Object>;
}

impl SGlobals {
    fn new() -> Object {
        new_obj!(SGlobals::default())
    }
}

use crate::new_obj;

impl Globals for SGlobals {
    /// Globals -> String -> Object -> Globals
    fn update(&mut self, name: &str, value: &Object) -> ObjResult<Object> {
        todo!()
    }

    /// Globals -> usize -> Object
    fn get_obj_by_id(&self, index: usize) -> ObjResult<Object> {
        todo!()
    }

    /// Globals -> String -> Object
    fn get_obj_by_name(&self, name: &str) -> ObjResult<Object> {
        todo!()
    }

    /// Globals -> String -> usize
    fn get_id_for_name(&self, name: &str) -> ObjResult<Object> {
        todo!()
    }
}

impl Display for SGlobals {
    /// Return string representation of
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        write!(f, "Globals")
    }
}

impl IObject for SGlobals {
    fn get_class<'a>(&self) -> &'a SClass {
        todo!()
    }

    fn get_hash(&self) -> usize {
        todo!()
    }

    fn equals(&self, other: &Object) -> bool {
        todo!()
    }
}

impl Default for SGlobals {
    fn default() -> Self {
        SGlobals {
            unique_name: SUnique::new(),
            obj_vect: new_obj!(SPersistentVector::default()),
        }
    }
}

lazy_static! {
    pub static ref CLASSES: Object = Object { inner: None };
    pub static ref PROTOCOLS: Object = Object { inner: None };
}
