import {getCombustionBonusesCount, getCombustionDate, getCurrentBonuses} from '../src/redux/app/seletors';
import Block from './components/Block/Block';
import InfoBlock from './components/InfoBlock/InfoBlock';
import {getAccessToken} from './redux/app/actions';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {textHeader, symbol, backgroundWhite, backgroundRed} from '../src/const/const';
import './App.css';

const App = ({getAccessToken, combustionBonusesCount, combustionDate, currentBonuses}) => {

    useEffect(() => {
        getAccessToken();
    }, [])

      return (<>
          <Block
              text={textHeader}
              symbol={symbol}
              background={backgroundWhite}
          >
          </Block>
          <Block
              background={backgroundRed}
          >
          </Block>
          <InfoBlock
              currentBonuses={currentBonuses}
              combustionDate={combustionDate}
              combustionBonusesCount={combustionBonusesCount}
          >
          </InfoBlock>
      </>);
};

const mapStateToProps = state => ({
    combustionDate: getCombustionDate(state),
    combustionBonusesCount: getCombustionBonusesCount(state),
    currentBonuses: getCurrentBonuses(state),
});

const mapDispatchToProps = {
  getAccessToken: getAccessToken,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
