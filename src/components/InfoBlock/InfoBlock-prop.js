import PropTypes from "prop-types";

export const propTypes = {
  combustionBonusesCount: PropTypes.number.isRequired,
  combustionDate: PropTypes.string.isRequired,
  currentBonuses: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};
