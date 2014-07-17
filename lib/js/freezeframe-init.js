/** ----------------------------------------------------------------------------
 * Setup & Run Freezeframe
 * -------------------------------------------------------------------------- */
typeof(freezeframe_options) == 'undefined' ? freezeframe_options = {} : null;
freezeframe = new FreezeFrame(freezeframe_options);
freezeframe.setup();
freezeframe.run();