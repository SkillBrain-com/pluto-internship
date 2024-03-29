import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = "https://semicolon-task-manager.herokuapp.com";

const initialState = {
  isLoading: false,
  errors: null,
  data: [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      const id = Math.random().toString(36).slice(2, 10);
      state.push({ ...action.payload, id, status: "Todo" });
    },
    fetchTasksStart: (state) => {
      state.isLoading = true;
    },
    fetchTasksError: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    fetchTasksSuccess: (state, action) => {
      state.isLoading = false;
      state.errors = null;
      state.data = action.payload;
    },
    createTasksStart: (state) => {
      state.isLoading = true;
    },
    createTaskSuccess: (state, action) => {
      state.isLoading = false;
      state.errors = null;
      state.data.push(action.payload);
    },
    editTasksStart: (state) => {
      state.isLoading = true;
    },
    editTaskSuccess: (state, action) => {
      state.isLoading = false;
      state.errors = null;
      state.data.push(action.payload);
    },
    deleteTasksStart: (state) => {
      state.isLoading = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.isLoading = false;
      state.errors = null;
      state.data.push(action.payload);
    },
  },
});
export const {
  createTask,
  editTask,
  fetchTasksStart,
  fetchTasksError,
  fetchTasksSuccess,
  createTaskSuccess,
  editTaskSuccess,
  deleteTaskSuccess,
  createTasksStart,
  editTasksStart,
  deleteTasksStart,
} = taskSlice.actions;

export const fetchTasksAction =
  (onSuccess, onError) => async (dispatch, getState) => {
    dispatch(fetchTasksStart());
    const state = getState();
    const token = state.app.auth.loggedUser.accessToken.accessToken;
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchTasksSuccess(response.data));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      dispatch(fetchTasksError(e.response.data.message));
      if (onError) {
        onError(e.response.data.message);
      }
    }
  };

export const fetchTasks = createAsyncThunk("posts/fetchTasks", async () => {
  const response = await axios.get("/fakeApi/posts");
  return response.data;
});

export const createTaskAction =
  (payload, onSuccess, onError) => async (dispatch, getState) => {
    dispatch(createTasksStart());
    const state = getState();
    const token = state.app.auth.loggedUser.accessToken.accessToken;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/tasks`,
        {
          title: payload.taskName,
          description: payload.taskDescription,
          dueDate: payload.dueDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(createTaskSuccess(response.data));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      dispatch(fetchTasksError(e.response.data.message));
      if (onError) {
        onError(e.response.data.message);
      }
    }
  };

export const editTaskAction =
  (payload, onSuccess, onError) => async (dispatch, getState) => {
    dispatch(editTasksStart());
    const state = getState();
    const token = state.app.auth.loggedUser.accessToken.accessToken;
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/tasks/${payload.id}`,
        {
          title: payload.taskName,
          description: payload.taskDescription,
          dueDate: payload.dueDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(editTaskSuccess(response.data));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      dispatch(fetchTasksError(e.response.data.message));
      if (onError) {
        onError(e.response.data.message);
      }
    }
  };

export const deleteTaskAction = (payload, onSuccess, onError) => (dispatch) => {
  dispatch(deleteTasksStart());
  try {
    deleteTaskSuccess(payload);
    if (onSuccess) {
      onSuccess();
    }
  } catch (e) {
    dispatch(fetchTasksError(e.payload.message));
    if (onError) {
      onError(e.message);
    }
  }
};

export default taskSlice.reducer;
