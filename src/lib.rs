#![crate_name = "clojurust"]

//! # `clojurust` crate: Proof of concept for a Clojure library in Rust.
//!
//! This library implements root functions for a Rust implemented `host` for
//! manage a `Clojure` implemented in `Rust`.
//! It implements also the core Java equivalent of the Java version of
//! Clojure in Rust.
//!
//! ## `crate::clojure::rust` module
//!
//! This module contains the `Rust` host.
//!
//!
//!
#![allow(dead_code)]
#![allow(unused_variables)]
// ![warn(unreachable_pub, missing_docs)]
#![allow(missing_docs)]
// #![allow(unused_imports)]
#![allow(bare_trait_objects)]
#![recursion_limit = "256"]
// #![feature(fn_traits)]
// #![feature(trace_macros)]
// trace_macros!(true);

/// Clojure Module
///
/// description de clojure
pub mod clojure {
    /// Clojure language module
    ///
    /// description de lang
    pub mod lang {}

    /// Rust host Module
    pub mod rust {
        pub mod class;
        pub mod fn_method_native;
        pub mod function;
        pub mod globaldb;
        pub mod globals;
        pub mod member;
        pub mod nil;
        pub mod number;
        // pub mod obj_error;
        pub mod obj_error;
        pub mod obj_hashmap;
        pub mod obj_hashset;
        pub mod obj_vector;
        pub mod object;
        pub mod protocol;
        pub mod prototype;
        pub mod str_hashmap;
        pub mod str_vector;
        pub mod stri;
        pub mod unique;
        pub mod macros {
            pub mod macros;
            pub mod number;
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
