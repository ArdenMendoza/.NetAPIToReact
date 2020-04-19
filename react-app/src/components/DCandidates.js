import React, { userState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/dCandidate';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DCandidateForm from './DCandidateForm';


const DCandidates = (props) => {


    useEffect(() => {
        props.fetchAllDCandidate()
    }, [])//Alternate for componentDidMount

    return (
        <Paper>
            <Grid ocontainer>
                <Grid item xs={6}>
                    <DCandidateForm/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Name </TableCell>
                                    <TableCell> Mobile </TableCell>
                                    <TableCell> Blood Group </TableCell>
                                    <TableCell> Age </TableCell>
                                    <TableCell> Address </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dCandidateList.map((record, index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell> {record.fullName} </TableCell>
                                                <TableCell> {record.mobile} </TableCell>
                                                <TableCell> {record.bloodGroup} </TableCell>
                                                <TableCell> {record.age} </TableCell>
                                                <TableCell> {record.address} </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
    
            </Grid>
        </Paper>
    );
}
const mapStateToProps = state => ({ dCandidateList: state.dCandidate.list })

const mapActionToProps = {
    fetchAllDCandidate: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(DCandidates);