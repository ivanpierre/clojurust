//! # Stores for Rust `Objects` identified by unique string name
//!
//! There will be multiple stores:
//! * `Class`es
//! * `Prototype`s
//! * `Class`es and `Prototype`s' `Function`s.
//! * `Object`s' `Member`s' getter and setters.

use std::sync::*;

use lazy_static::lazy_static;

// use intertrait::cast::*;

use crate::use_obj;

use_obj! {
    clojure::rust::object;
    clojure::rust::class;
    clojure::rust::obj_vector;
    clojure::rust::unique;
}

castable_to!(SGlobals => [sync] TObject, Globals);

init_obj! {
    Globals {
        clojure::rust::object::init();
        clojure::rust::class::init();
        clojure::rust::obj_vector::init();
        clojure::rust::unique::init();
    }
}

pub struct SGlobals {
    pub unique_name: Object, // SUnique
    pub obj_vect: Object,  // SObjVector
}

pub trait Globals: CastFromSync {
    fn update_object(&mut self, name: &str, value: &Object) -> Option<(usize, Object)>;

    fn add_object(&mut self, name: &str, value: &Object) -> usize;

    fn get_obj_by_id(&self, index: usize) -> Object;

    fn get_obj_by_name(&self, name: &str) -> Object;
}

impl SGlobals {
    fn new() -> Object {
        new_obj!(SGlobals::default())
    }
}

use crate::new_obj;

impl Globals for SGlobals {
    fn update_object(&mut self, name: &str, value: &Object) -> Option<(usize, Object)> {
        let v = self;
        let b = v
            .unique_name
            .clone()
            .cast_mut::<SUnique>()
            .get(index, value.clone());
        new_obj!(SGlobals {
            unique_name: self.unique_name,
            obj_vect: new_obj!(v),
        });
    }

    fn add_object(&mut self, name: &str, value: &Object) -> usize {
        todo!()
    }

    fn get_obj_by_id(&self, index: usize) -> Object {
        self.obj_vect.get(index).expect("TODO object not found").clone()
    }

    fn get_obj_by_name(&self, index: &str) -> Object {
        todo!()
    }
}

impl TObject for SGlobals {
    fn get_class<'a>(&self) -> &'a SClass {
        todo!()
    }

    fn to_string(&self) -> &str {
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
            obj_vect: new_obj!(SObjVector::new()),
        }
    }
}

lazy_static! {
    static ref CLASSES: Object = Object { inner: None };
    static ref PROTOCOLS: Object = Object { inner: None };
}
