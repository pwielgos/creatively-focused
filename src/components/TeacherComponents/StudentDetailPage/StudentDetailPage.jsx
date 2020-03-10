import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentDetailPage extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_STUDENT',
        })
    }

    render() {
        console.log(this.props.match.params.id);
        let selectedStudent = this.props.student.filter(student => student.id == this.props.match.params.id)[0];
        return (
            <div>
                <h1>Student Detail Page</h1>
                <ul>
                    <li>{selectedStudent && selectedStudent.firstname}</li>
                    <li>{selectedStudent && selectedStudent.lastname}</li>
                    <li>{selectedStudent && selectedStudent.grade}</li>
                    <li>{selectedStudent && selectedStudent.disability_cat}</li>
                    <li>{selectedStudent && selectedStudent.fed_setting}</li>
                    <li>{selectedStudent && selectedStudent.student_id}</li>
                    <li>{selectedStudent && selectedStudent.initial_iep}</li>
                    <li>{selectedStudent && selectedStudent.prev_iep}</li>
                    <li>{selectedStudent && selectedStudent.next_iep}</li>
                    <li>{selectedStudent && selectedStudent.prev_eval}</li>
                    <li>{selectedStudent && selectedStudent.teacher}</li>
                    <li>{selectedStudent && selectedStudent.school_id}</li>
                    <li>{selectedStudent && selectedStudent.isd_id}</li>
                </ul>
                <button>EDIT STUDENT</button>
                <br />
                <button>BACK TO STUDENT LIST</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    user: state.user,
});

export default connect(mapStateToProps)(StudentDetailPage);