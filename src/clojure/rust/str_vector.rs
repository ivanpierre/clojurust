//! # Vector of `Strings`s with `TObject` protocol
//!
//! This is a wrapper on `im-rs` Vector<Object> library

// use lazy_static::__Deref;
// use std::{any::*, result::*, sync::*};
// use std::{fmt::*, hash::*};

// use intertrait::cast::*;
use intertrait::*;

use crate::clojure;
use clojure::rust::class::*;
use clojure::rust::object::*;

pub type SStrVector = im::vector::Vector<String>;

castable_to!(SStrVector => [sync] TObject, StrVector);

impl TObject for SStrVector {
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

pub trait StrVector: CastFromSync {}

impl StrVector {}

impl StrVector for SStrVector {}

pub unsafe fn init() {
    // only execute one time
    if INIT {
        return;
    }
    INIT = true;

    println!("ObjVector::init");

    // Insures all is initialized
    clojure::rust::object::init();
    clojure::rust::class::init();
}

static mut INIT: bool = false;
