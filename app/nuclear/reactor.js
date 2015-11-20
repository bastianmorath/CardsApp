/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

/**
 * The reactor.js file exports the reactor object of nuclear-js, which is the brain
 * of the whole system.
 */
import nuclearjs from 'nuclear-js';
const { Reactor } = nuclearjs;

const reactor = new Reactor({
  debug: true,
});

export default reactor;
